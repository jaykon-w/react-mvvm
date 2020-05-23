import React, { useState, useEffect } from "react";
import { Observable } from "rxjs";

interface Props<T> {
  stream: Observable<T>;
  default?: React.ReactElement;
  children: (val: T) => React.ReactElement;
}

export function Observer<T>(props: Props<T>): React.ReactElement | null {
  const [val, setState] = useState<T>();

  useEffect(() => {
    const sub = props.stream.subscribe(setState);
    return () => sub.unsubscribe();
  }, []);

  return val !== undefined ? props.children(val) : (props.default || null);
};
