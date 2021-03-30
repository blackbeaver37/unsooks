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