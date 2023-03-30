import React from 'react';

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
            tokenUrl: 'https://your.token.url'
        });

        return () => {
            unmount();
        };
    }, []);

    return <div ref={ref} />;
}

export default App;
