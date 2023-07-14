import React from 'react';
import 'ckbox/dist/ckbox.js';

function App() {
    const ref = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const root = ref.current;

        if (!root) {
            return;
        }

        const { unmount } = CKBox.mount(root, {
            assets: {
                onChoose: (assets) => {
                    /* eslint-disable-next-line */
                    console.log(assets);
                }
            },
            dialog: true,
            tokenUrl: 'https://dev.ckbox.io/demo/token/'
        });

        return () => {
            unmount();
        };
    }, []);

    return <div ref={ref} />;
}

export default App;
