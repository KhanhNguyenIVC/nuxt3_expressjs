// tests/components/SomeComponents.nuxt.spec.ts
import { renderSuspended } from '@nuxt/test-utils/runtime'

test('unit test 01', () => {
    $a = 1;
    $a++;
})

it('can also render an app', async () => {
    const html = await renderSuspended(App, { route: '/test' })
    expect(html()).toMatchInlineSnapshot(`
      "<div id="test-wrapper">
        <div>This is an auto-imported component</div>
        <div> I am a global component </div>
        <div>Index page</div><a href="/test"> Test link </a>
      </div>"
    `)
})
