import * as React from 'react';
import { CKBox } from '@ckbox/core';

function App() {
    return (
        <CKBox
            assets={{
                onChoose: (assets) => {
                    /* eslint-disable-next-line */
                    console.log(assets);
                }
            }}
            categories={{
                icons: {
                    /**
                     * Custom icon as a raw string. Icon class names will be appended internally.
                     */
                    Images: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" /></svg>`,

                    /**
                     * Custom icon as React component.
                     */
                    Files: ({ className }) => (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={className}
                            viewBox="0 0 20 20"
                        >
                            <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                    )
                }
            }}
            dialog={true}
            tokenUrl="https://your.token.url/"
        />
    );
}

export default App;
