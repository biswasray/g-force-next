"use server";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function setCookie(
  key: string,
  value: string,
  cookie?: Partial<ResponseCookie> | undefined
) {
  cookies().set(key, value, cookie);
}

export async function getCookie(key: string) {
  return cookies().get(key)?.value;
}

export async function removeCookie(key: string) {
  cookies().delete(key);
}
