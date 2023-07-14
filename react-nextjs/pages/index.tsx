import React from 'react';
import dynamic from 'next/dynamic';
import '@ckbox/components/dist/styles/ckbox.css';

const CKBox = dynamic(() => import('@ckbox/core').then((e) => e.CKBox), {
    ssr: false
});

export default function Home() {
    return (
        <CKBox
            assets={{
                onChoose: (assets) => {
                    // eslint-disable-next-line no-console
                    console.log(assets);
                }
            }}
            dialog={true}
            tokenUrl="https://dev.ckbox.io/demo/token/"
        />
    );
}
