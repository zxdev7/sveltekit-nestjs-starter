/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @param {any} name
 */
export function getCookie(name: any) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts?.pop()?.split(';').shift();
    return null; // Return null if the cookie is not found
  }

  /**
 * @param {any} name
 * @param {any} value
 * @param {number} days
 */
  export function setCookie(name: any, value: any, days: any) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration date
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }