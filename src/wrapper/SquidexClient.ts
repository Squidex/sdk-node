import * as environments from "../environments";
import {
    AppsApi,
    AppsApiInterface,
    AssetsApi,
    AssetsApiInterface,
    BackupsApi,
    BackupsApiInterface,
    Configuration,
    ConfigurationParameters,
    ContentsApi,
    ContentsApiInterface,
    DiagnosticsApi,
    DiagnosticsApiInterface,
    EventConsumersApi,
    EventConsumersApiInterface,
    FetchAPI,
    HistoryApi,
    HistoryApiInterface,
    LanguagesApi,
    LanguagesApiInterface,
    Middleware,
    NewsApi,
    NewsApiInterface,
    PingApi,
    PingApiInterface,
    PlansApi,
    PlansApiInterface,
    ResponseError,
    RulesApi,
    RulesApiInterface,
    SchemasApi,
    SchemasApiInterface,
    SearchApi,
    SearchApiInterface,
    StatisticsApi,
    StatisticsApiInterface,
    TeamsApi,
    TeamsApiInterface,
    TemplatesApi,
    TemplatesApiInterface,
    TranslationsApi,
    TranslationsApiInterface,
    UserManagementApi,
    UserManagementApiInterface,
    UsersApi,
    UsersApiInterface,
} from "../generated";
import { buildError } from "./errors";
import { addHeader, getHeader } from "./headers";
import { TokenAPI } from "./TokenAPI";

export interface SquidexOptions {
    /**
     * The name of the app.
     */
    appName: string;

    /**
     * The secret of the client.
     */
    clientId: string;

    /**
     * The secret of the client.
     */
    clientSecret: string;

    /**
     * Custom headers to be added to each request.
     */
    customHeader?: Record<string, string>;

    /**
     * The URL to your Squidex installation (cloud by default).
     */
    environment?: environments.SquidexEnvironment | string;

    /**
     * A custom fetcher for normal requests.
     */
    fetcher?: FetchAPI;

    /**
     * A function to create a new fetcher based on the default fetcher.
     */
    middleware?: Middleware;

    /**
     * The timeout in milliseconds.
     */
    timeout?: number;

    /**
     * The store for tokens. By default it is in memory.
     */
    tokenStore?: TokenStore;
}

export interface TokenStore {
    get(): Token | undefined;

    set(token: Token): void;

    clear(): void;
}

export interface Token {
    accessToken: string;
    expiresIn: number;
    expiresAt: number;
}

export class SquidexClients {
    private readonly configuration: Configuration;
    private readonly tokenStore: TokenStore;
    private readonly tokenApi: TokenAPI;
    private appsApi?: AppsApi;
    private assetsApi?: AssetsApi;
    private backupsApi?: BackupsApi;
    private contentsApi?: ContentsApi;
    private diagnosticsApi?: DiagnosticsApi;
    private eventConsumersApi?: EventConsumersApi;
    private historyApi?: HistoryApi;
    private languagesApi?: LanguagesApi;
    private newsApi?: NewsApi;
    private pingApi?: PingApi;
    private plansApi?: PlansApi;
    private rulesApi?: RulesApi;
    private schemasApi?: SchemasApi;
    private searchApi?: SearchApi;
    private statisticsApi?: StatisticsApi;
    private teamsApi?: TeamsApi;
    private templatesApi?: TemplatesApi;
    private translationsApi?: TranslationsApi;
    private usersApi?: UsersApi;
    private userManagementApi?: UserManagementApi;

    public get apps(): AppsApiInterface {
        return (this.appsApi ??= new AppsApi(this.configuration));
    }

    public get assets(): AssetsApiInterface {
        return (this.assetsApi ??= new AssetsApi(this.configuration));
    }

    public get backups(): BackupsApiInterface {
        return (this.backupsApi ??= new BackupsApi(this.configuration));
    }

    public get contents(): ContentsApiInterface {
        return (this.contentsApi ??= new ContentsApi(this.configuration));
    }

    public get diagnostics(): DiagnosticsApiInterface {
        return (this.diagnosticsApi ??= new DiagnosticsApi(this.configuration));
    }

    public get eventConsumers(): EventConsumersApiInterface {
        return (this.eventConsumersApi ??= new EventConsumersApi(this.configuration));
    }

    public get history(): HistoryApiInterface {
        return (this.historyApi ??= new HistoryApi(this.configuration));
    }

    public get languages(): LanguagesApiInterface {
        return (this.languagesApi ??= new LanguagesApi(this.configuration));
    }

    public get news(): NewsApiInterface {
        return (this.newsApi ??= new NewsApi(this.configuration));
    }

    public get ping(): PingApiInterface {
        return (this.pingApi ??= new PingApi(this.configuration));
    }

    public get plans(): PlansApiInterface {
        return (this.plansApi ??= new PlansApi(this.configuration));
    }

    public get rules(): RulesApiInterface {
        return (this.rulesApi ??= new RulesApi(this.configuration));
    }

    public get schemas(): SchemasApiInterface {
        return (this.schemasApi ??= new SchemasApi(this.configuration));
    }

    public get search(): SearchApiInterface {
        return (this.searchApi ??= new SearchApi(this.configuration));
    }

    public get statistics(): StatisticsApiInterface {
        return (this.statisticsApi ??= new StatisticsApi(this.configuration));
    }

    public get teams(): TeamsApiInterface {
        return (this.teamsApi ??= new TeamsApi(this.configuration));
    }

    public get templates(): TemplatesApiInterface {
        return (this.templatesApi ??= new TemplatesApi(this.configuration));
    }

    public get translations(): TranslationsApiInterface {
        return (this.translationsApi ??= new TranslationsApi(this.configuration));
    }

    public get users(): UsersApiInterface {
        return (this.usersApi ??= new UsersApi(this.configuration));
    }

    public get userManagement(): UserManagementApiInterface {
        return (this.userManagementApi ??= new UserManagementApi(this.configuration));
    }

    /**
     * The current app name.
     */
    public get appName() {
        return this.clientOptions.appName;
    }

    /**
     * The current client ID.
     */
    public get clientId() {
        return this.clientOptions.clientId;
    }

    /**
     * The current client secret.
     */
    public get clientSecret() {
        return this.clientOptions.clientSecret;
    }

    /**
     * The current URL to the Squidex installation.
     */
    public get environment() {
        return this.clientOptions.environment || environments.SquidexEnvironment.Default;
    }

    constructor(readonly clientOptions: SquidexOptions) {
        if (!clientOptions.clientId) {
            throw new Error("Configuration 'clientId' is required.");
        }

        if (!clientOptions.clientSecret) {
            throw new Error("Configuration 'clientSecret' is required.");
        }

        if (!clientOptions.appName) {
            throw new Error("Configuration 'appName' is required.");
        }

        this.tokenStore = this.clientOptions.tokenStore || new InMemoryTokenStore();

        const fetchCore = this.clientOptions.fetcher || fetch;
        const fetchApi: FetchAPI = async (input, init) => {
            init ||= {};

            addOptions(init, clientOptions);

            if (!getHeader(init, "X-AuthRequest")) {
                addHeader(init, "Authorization", `Bearer ${await this.tokenApi.getToken()}`);
            }

            let response: Response;
            try {
                const updateURL = (source: string) => {
                    return source.replace("$app$", this.appName);
                };

                if (typeof input === "string") {
                    input = updateURL(input);
                } else if (input instanceof URL) {
                    input = updateURL(input.toString());
                } else {
                    input = { ...input, url: updateURL(input.url) };
                }

                response = await fetchCore(input, init);

                if (response && response.status === 401 && !getHeader(init, "X-Retry")) {
                    addHeader(init, "X-Retry", "1");
                    this.clearToken();
                    return await fetchApi(input, init);
                }
            } catch (error: unknown) {
                throw await buildError(error);
            }

            if (response && response.status >= 200 && response.status < 300) {
                return response;
            }

            const cause = new ResponseError(response, "Response returned an error code");
            throw await buildError(cause);
        };

        const parameters: ConfigurationParameters = {
            basePath: clientOptions.environment || "https://cloud.squidex.io",
            fetchApi,
        };

        if (clientOptions.middleware) {
            parameters.middleware = [clientOptions.middleware];
        }

        this.configuration = new Configuration(parameters);

        // Create an empty API object for the token.
        this.tokenApi = new TokenAPI(this.tokenStore, clientOptions, this.configuration);
    }

    /**
     * Clears the current token in case it has been expired.
     */
    clearToken() {
        this.tokenStore.clear();
    }
}

function addOptions(init: RequestInit, clientOptions: SquidexOptions) {
    if (clientOptions.timeout) {
        init.signal = AbortSignal.timeout(clientOptions.timeout);
    }

    if (clientOptions.customHeader) {
        for (const [key, value] of Object.entries(clientOptions.customHeader)) {
            addHeader(init, key, value);
        }
    }
}

export class InMemoryTokenStore implements TokenStore {
    private token: Token | undefined;

    get(): Token | undefined {
        return this.token;
    }

    set(token: Token): void {
        this.token = token;
    }

    clear() {
        this.token = undefined;
    }
}

export class StorageTokenStore implements TokenStore {
    constructor(
        readonly store: Storage = localStorage,
        readonly key = "SquidexToken",
    ) {}

    get(): Token | undefined {
        const value = this.store.getItem(this.key);

        if (!value) {
            return undefined;
        }

        return JSON.parse(value);
    }

    set(token: Token): void {
        this.store.setItem(this.key, JSON.stringify(token));
    }

    clear() {
        this.store.removeItem(this.key);
    }
}
