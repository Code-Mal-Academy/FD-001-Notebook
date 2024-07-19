const ServerComponent = async () => {

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    await delay(10000)


    return (
        <>
            <p>Hello</p>
        </>)
}

export default ServerComponent