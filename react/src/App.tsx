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
            dialog={true}
            tokenUrl="https://your.token.url"
        />
    );
}

export default App;
