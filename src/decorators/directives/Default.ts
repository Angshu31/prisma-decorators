import { Directive } from "./Directive";

export type DefaultDirectiveType =
  | "autoincrement"
  | "uuid"
  | (string & { zz_ignore_me__?: never });

export function Default(default_: DefaultDirectiveType) {
  return Directive(
    `@default(${
      // Autoinsert `()` for autoincrement and uuid
      default_ === "autoincrement" || default_ === "uuid"
        ? `${default_}()`
        : default_
    })`,
    { type: "default" }
  );
}
