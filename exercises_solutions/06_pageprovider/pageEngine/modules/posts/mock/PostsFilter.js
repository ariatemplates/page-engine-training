Aria.classDefinition({
    $classpath : "exercises.handson.pageEngine.modules.posts.mock.PostsFilter",
    $extends : "aria.core.IOFilter",
    $prototype : {

        onRequest : function (req) {
            if (req.url.match(/server\/posts/) !== null) {
                req.delay = 2000;
                this.redirectToFile(req, "exercises/handson/pageEngine/modules/posts/mock/posts.json");
            }
        },

        onResponse : function (req) {
            if (req.url.match(/mock\/posts/) !== null) {
                var response = req.res.responseJSON;
                var authors = response.authors, messages = response.messages;
                var mocked = {
                    posts : []
                };
                for (var i = 0; i < 5; i++) {
                    mocked.posts.push({
                        author : this._getRandom(authors),
                        message : this._getRandom(messages)
                    });
                }
                req.res.responseJSON = mocked;
            }
        },

        _getRandom : function (inside) {
            var length = inside.length;
            var randomIndex = Math.round(Math.random() * (length - 1));
            return inside[randomIndex];
        }
    }
});
