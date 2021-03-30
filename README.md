# Unsooks

## useInput

```js
const validator = (value) => value.length <= 10;
const input = useInput("initString", validator);
return <input placeholder="Name" {...input} />;
```

</br>

## useTabs

```js
const content = [
    {
        tab: "Section 1",
        content: "content of Section 1",
    },
    {
        tab: "Section 2",
        content: "content of Section 2",
    },
    .
    .
    .
];
```

```js
const { currentItem, chageItem } = useTabs(0, content);
return (
    <div className="App">
        {content.map((section, index) => (
            <button onClick={() => chageItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
    </div>
);
```

</br>

## useTitle

```js
const titleUpdater = useTitle("Loading...");
setTimeout(() => titleUpdater("Home"), 5000);
return <div className="App"></div>;
```

</br>

## useClick

```js
const onClickFunc = () => console.log("Click");
const refElement = useClick(onClickFunc);
return (
    <div className="App">
        <h1 ref={refElement}>Text</h1>
    </div>
);
```

</br>

## useHover

```js
const onHoverFunc = () => console.log("Hover");
const refElement = useHover(onHoverFunc);
return (
    <div className="App">
        <h1 ref={refElement}>Text</h1>
    </div>
);
```

</br>

## useConfirm

```js
const deleteFunc = () => console.log("Delete");
const cancelFunc = () => console.log("Cancel"); // option
const message = "Check";
const confirmDelete = useConfirm(message, deleteFunc, cancelFunc);
return (
    <div className="App">
        <button onClick={confirmDelete}>Delete</button>
    </div>
);
```

</br>

## usePreventLeave

```js
const { enablePrevent, disablePrevent } = usePreventLeave();
return (
    <div className="App">
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>UnProtect</button>
    </div>
);
```

</br>

## useBeforeLeave

```js
const handleLeave = () => console.log("Leave");
useBeforeLeave(handleLeave);
return (
    <div className="App">
        <h1>Text</h1>
    </div>
);
```

</br>

## useFadeIn

```js
const duration = 3; // default 1
const delay = 1; // default 0
const fadeIn = useFadeIn(duration, delay);
return (
    <div className="App">
        <h1 {...fadeIn}>Text</h1>
    </div>
);
```

</br>

## useNetwork

```js
const handleNetworkChange = (online) => {
    console.log(online ? "Online" : "Offline");
};
const online = useNetwork(handleNetworkChange); // true of false
return (
    <div className="App">
        <h1>{online ? "Online" : "Offline"}</h1>
    </div>
);
```

</br>

## useScroll

```js
const { y } = useScroll();
return (
    <div className="App" style={{ height: "1000vh" }}>
        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
            Text
        </h1>
    </div>
);
```

</br>

## useFullscreen

```js
const onFullscreen = (isFull) => {
    console.log(isFull ? "Full Screen" : "Not Full screen");
};
const { element, triggerFull, exitFull } = useFullscreen(onFullscreen);
return (
    <div className="App">
        <div ref={element}>
            <img src="img-src" alt="img-alt" />
            <button onClick={exitFull}>Exit Full Screen</button>
        </div>
        <button onClick={triggerFull}>Full Screen</button>
    </div>
);
);
```

</br>

## useNotification

```js
const options = {
    body: "body",
    icon: "icon",
    ...
};
const triggerNotification = useNotification("title", options);
return (
    <div className="App">
        <button onClick={triggerNotification}>Button</button>
    </div>
);
```

</br>

## useAxios

```js
const { loading, error, data, refetch } = useAxios({
    url: "api-url",
});
return (
    <div className="App">
        <h1>{loading && "Loading"}</h1>
        <h1>{error && "Error!"}</h1>
        <button onClick={refetch}>Refetch</button>
        <div>{data && JSON.stringify(data)}</div>
    </div>
);
```
