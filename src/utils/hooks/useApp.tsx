import * as Realm from "realm-web";
import { useEffect, useState } from "react";
import { APP_ID } from "utils/const";

const realmApp = new Realm.App({ id: APP_ID });

export const useApp = () => {
  const [app, setApp] = useState<Realm.App>();

  useEffect(() => {
    const loginAnonymousUser = async () => {
      const credentials = Realm.Credentials.anonymous();
      await realmApp.logIn(credentials);
    };
    loginAnonymousUser();
    setApp(realmApp);
  }, []);

  return app;
};
