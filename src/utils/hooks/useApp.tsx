import * as Realm from "realm-web";
import { useEffect, useState } from "react";
import { APP_ID } from "utils/const";

const realmAppConfig: Realm.AppConfiguration = {
  id: APP_ID,
};

const realmApp = new Realm.App(realmAppConfig);

export const useApp = () => {
  const [app, setApp] = useState<Realm.App>();

  useEffect(() => {
    const loginAnonymousUser = async () => {
      const credentials = Realm.Credentials.anonymous();
      await realmApp.logIn(credentials);
      setApp(realmApp);
    };
    loginAnonymousUser();
  }, []);

  return app;
};
