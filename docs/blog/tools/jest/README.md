## Expect

将值传入expect中并返回expect对象，expect对象可以访问不同的匹配器

```
    expect(1.1 + 2.2).toBe(3.3)
```

- toBeNull

  为null

- toBeUndefined

  undefined

- toBeDefined

  与toBeUndefined相反

- toBeTruthy

  表达式为真

- toBeFalsy

  表达式为假

- toBe

  全等

- toEqual

  对象所有值相等

- toBeCloseTo

  近似（用于比较浮点数）

- toMatch

  匹配正则表达式

- toContain

  数组或可迭代对象是否包含某个特定项

- toThrow

  匹配错误类型或错误信息

  ```
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });
  ```

## 异步

- promise

  需要return promise,否则测试直接完成

- resolves

  断言Promsie返回	resolves

  ```
  expect(fetchData()).resolves.toBe('peanut butter')
  ```

- rejects

  断言Promsie返回	rejects	

- assertions

  断言后面代码promise有几次reject

  ```
  expect.assertions(1);//reject一次
  return fetchData().catch(e => expect(e).toMatch('error'));
  ```

- Async/Await

  ```
  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  ```

## 初始化

beforeEach

afterEach

beforeAll

afterAll

describe