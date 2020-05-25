import React, { useContext, useMemo } from "react";

const Ctx = React.createContext([] as any);

interface Props {
  binds: ((inject: <T>(cls: any) => T) => any)[];
  children: React.ReactElement;
}

export const Provider: React.FC<Props> = ({ children, binds }) => {
  const _binds = useMemo(() => {
    let _binds: any[] = [];
    function inject<T>(cls: any): T {
      return _binds.find((e: any) => e instanceof (cls as any));
    }
    binds.forEach((e) => _binds.push(e(inject)));
    return _binds;
  }, [binds]);

  return <Ctx.Provider value={_binds}>{children}</Ctx.Provider>;
};

export function useProvider<T>(cls: new (...args: any) => T): T {
  const ctx = useContext(Ctx);
  const instance = ctx.find((e: any) => e instanceof cls);
  if (!instance) throw Error(`instance of ${cls.constructor.name} not found`);
  return instance;
}
