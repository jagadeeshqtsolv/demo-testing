// Auto-generated from saved API definitions — regenerated whenever "Api" APIs change. Do not edit by hand.
import type { APIRequestContext } from '@playwright/test';
import env from '@support/env';
import { assertStatus, getByPath, resolveTemplate } from './_runtime';

export class Api {
  async dummy(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://dummy-json.mock.beeceptor.com/posts", vars, env));
    const headers: Record<string, string> = {};
    const res = await request.get(url.toString(), { headers });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [200], "GET", url.toString(), body);
    return {
      "title": String(getByPath(body, "[0].title") ?? ""),
    };
  }
}
