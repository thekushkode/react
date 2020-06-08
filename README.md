# React 101

Learning the basics of React + initial file set-up:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
</head>

<body>
    <div id="root">

    </div>


    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script src="./index.js" type="text/babel"></script>
</body>

</html>
```

** JS Code Sample **
```javascript
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
```
