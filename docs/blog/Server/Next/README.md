###  预渲染 

-  静态生成（预渲染）页面的不需要外部数据的部分 

```
//build时运行	可以从静态文件或数据库 先加载数据后编译
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
```



### 服务器渲染

```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

:::tip

-  不能由[CDN](https://vercel.com/docs/edge-network/overview)缓存 
- 每个请求都需要服务器计算

:::

### 客户端渲染

-  静态生成（预渲染）页面的不需要外部数据的部分 
- 页面加载后，使用JavaScript从客户端获取外部数据并填充其余部分。