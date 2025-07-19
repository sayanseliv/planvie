export type RootStackParamList = {
  MainTabs: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  AddTask: undefined;
  Theme: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
