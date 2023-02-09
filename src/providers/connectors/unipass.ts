export interface IAbstractConnectorOptions {
  network: string;
}

export declare enum UniPassTheme {
  LIGHT = "light",
  DARK = "dark"
}

export declare type ChainType =
  | "polygon"
  | "bsc"
  | "rangers"
  | "eth"
  | "scroll"
  | "arbitrum";

export declare type AppSettings = {
  chain?: ChainType;
  appName?: string;
  appIcon?: string;
  theme?: UniPassTheme;
};

export interface UniPassProviderOptions {
  chainId: number;
  returnEmail: boolean;
  appSettings?: Omit<AppSettings, "chain">;
}

export type IUniPassConnectorOptions = UniPassProviderOptions &
  IAbstractConnectorOptions;

const ConnectToUniPass = (
  UniPassProvider: any,
  options: IUniPassConnectorOptions
) => {
  if (!options || !options.chainId) {
    throw new Error("Options invalid, please pass valid options");
  }

  return new Promise(async (resolve, reject) => {
    try {
      const provider = new UniPassProvider(options);
      await provider.connect();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export default ConnectToUniPass;
