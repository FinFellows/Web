import { GOD_TOKEN } from '@/constants/godToken';
import Cookies from 'js-cookie';

class User {
  private _accessToken: string | null;
  private _refreshToken: string | null;
  private _isAdmin: boolean;

  constructor() {
    this._accessToken = Cookies.get('Authorization') || null;
    this._refreshToken = Cookies.get('Refresh_Token') || null;
    this._isAdmin = false;
  }
  getAccessToken() {
    return this._accessToken ? this._accessToken.replace('Bearer_', '') : null;
  }

  getRefreshToken() {
    return this._refreshToken ? this._refreshToken.replace('Bearer_', '') : null;
  }

  setAccessToken(newAccessToken: string) {
    Cookies.set('Authorization', newAccessToken);
    this._accessToken = newAccessToken;
  }

  deleteAccessToken() {
    Cookies.remove('Authorization');
    this._accessToken = null;
  }

  setRefreshToken(newRefreshToken: string) {
    Cookies.set('Refresh_Token', newRefreshToken);
    this._refreshToken = newRefreshToken;
  }

  deleteRefreshToken() {
    Cookies.remove('Refresh_Token');
    this._refreshToken = null;
  }

  isAdmin() {
    return this._isAdmin;
  }

  setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }
}

export const user = new User();
