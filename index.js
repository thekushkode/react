// const app = (
//     <main>
//         <h1>Albums</h1>
//         <p>This album sucks...</p>
//     </main>
// );


class App extends React.Component {
    render() {
        return (
            <main>
                <h1>Albums</h1>
                <p>This album sucks...</p>
            </main>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));