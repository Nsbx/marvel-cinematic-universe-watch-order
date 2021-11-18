// https://dev.to/danawoodman/svelte-quick-tip-using-actions-to-integrate-with-javascript-libraries-tippy-tooltips-2m94

import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function tooltip(node, params = {}) {

    const custom = params.content;
    const title = node.title;
    const label = node.getAttribute("aria-label");
    const content = custom || title || label;

    if (!label) node.setAttribute("aria-label", content);

    node.title = "";

    // https://atomiks.github.io/tippyjs/v6/all-props/
    const tip = tippy(node, {
        content,
        plugins: [followCursor],
        ...params
    });

    return {
        update: (newParams) => tip.setProps({
            content,
            ...newParams
        }),

        destroy: () => tip.destroy(),
    };
};

export default tooltip;