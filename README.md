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
