export interface INoHeader {
  headerShown: boolean;
}

export interface IHeader {
  headerStyle: {
    backgroundColor: string;
  };
  headerTintColor: string;
  headerTitleContainerStyle:{
    left: number;
  };
  headerTitleStyle: {
    fontWeight: string;
  };
  headerTitle: any;
}
