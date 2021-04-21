export interface INoHeader {
  headerShown: boolean;
}

export interface IHeader {
  headerStyle: {
    backgroundColor: string;
  };
  headerTintColor: string;
  headerTitleStyle: {
    fontWeight: string;
  };
  headerTitle: any;
}
