/** @jsx h */
import { h } from 'preact';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';

export const handler: Handlers = {
  async GET(_, ctx: HandlerContext) {
    const resp = await ctx.render();
    resp.headers.set('X-Custom-Header', 'Hello World');
    return resp;
  },
};

export default function Page(props: PageProps) {
  return <div>You are on the page '{props.url.href}'.</div>;
}
