```
        set: function (data, callback) {
            this.setData(data, callback);
            return new Promise(function (resolve) { return wx.nextTick(resolve); });
        },

```

