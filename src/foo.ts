import { NS } from "./NetscriptDefinitions.d";
import { doSomeStuff } from "./test";

export function main(ns: NS) {
  const num = doSomeStuff(5);

  ns.tprint(num);
}
