function getUrls() {
    videos = []
    try {
        let toledo_content = document.getElementById('content_listContainer').getElementsByTagName("li");
        for (var i = 0; i < toledo_content.length; i++) {
            if (toledo_content[i].getElementsByTagName('iframe').length > 0) {
                var url = '"' + toledo_content[i].getElementsByTagName('iframe')[0].src + '"';
                var title = '"' + toledo_content[i].getElementsByTagName('h3')[0].innerText + '"';
                var metadata = '{"toledo_url":' + url + ',"toledo_title":' + title + '}';
                videos.push(metadata);
            }
        }
    } catch (e) {
        try {
            let kaltura_channel = document.getElementsByTagName('iframe')[0].src;
            setTimeout(function(){
                window.open(kaltura_channel);
            }, 1000);
        } catch (e) {
            let toledo_content = document.getElementById('gallery').getElementsByTagName("li");
            for (var i = 0; i < toledo_content.length; i++) {
                if (toledo_content[i].getElementsByTagName('img').length > 0) {
                    var url = '"' + toledo_content[i].getElementsByTagName('img')[0].src + '"';
                    var title = '"' + toledo_content[i].getElementsByClassName('thumb_name_content')[0].innerText + '"';
                    var metadata = '{"toledo_url":' + url + ',"toledo_title":' + title + '}';
                    videos.push(metadata);
                }
            }
        }
    }

    var json = '{' + '"videos": ['+ videos.join(',').toString() + ']}';
    console.log(json);
    navigator.clipboard.writeText(json);null;
    setTimeout(function(){
        window.open('http://localhost:80');
    }, 1000);
}

getUrls();

// javascript:%20function%20getUrls()%20%7B%0A%20%20%20%20videos%20=%20%5B%5D%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20let%20toledo_content%20=%20document.getElementById('content_listContainer').getElementsByTagName(%22li%22);%0A%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20toledo_content.length;%20i++)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(toledo_content%5Bi%5D.getElementsByTagName('iframe').length%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByTagName('iframe')%5B0%5D.src%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20title%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByTagName('h3')%5B0%5D.innerText%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20metadata%20=%20'%7B%22toledo_url%22:'%20+%20url%20+%20',%22toledo_title%22:'%20+%20title%20+%20'%7D';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20videos.push(metadata);%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20kaltura_channel%20=%20document.getElementsByTagName('iframe')%5B0%5D.src;%0A%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.open(kaltura_channel);%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D,%201000);%0A%20%20%20%20%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20//%20get%20all%20videos%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20toledo_content%20=%20document.getElementById('gallery').getElementsByTagName(%22li%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20toledo_content.length;%20i++)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(toledo_content%5Bi%5D.getElementsByTagName('img').length%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByTagName('img')%5B0%5D.src%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20title%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByClassName('thumb_name_content')%5B0%5D.innerText%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20metadata%20=%20'%7B%22toledo_url%22:'%20+%20url%20+%20',%22toledo_title%22:'%20+%20title%20+%20'%7D';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20videos.push(metadata);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20var%20json%20=%20'%7B'%20+%20'%22videos%22:%20%5B'+%20videos.join(',').toString()%20+%20'%5D%7D';%0A%20%20%20%20console.log(json);%0A%20%20%20%20navigator.clipboard.writeText(json);null;%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20window.open('http://localhost:80');%0A%20%20%20%20%7D,%201000);%0A%7D%0AgetUrls();void(0);
// <a href="javascript:%20function%20getUrls()%20%7B%0A%20%20%20%20videos%20=%20%5B%5D%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20let%20toledo_content%20=%20document.getElementById('content_listContainer').getElementsByTagName(%22li%22);%0A%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20toledo_content.length;%20i++)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(toledo_content%5Bi%5D.getElementsByTagName('iframe').length%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByTagName('iframe')%5B0%5D.src%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20title%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByTagName('h3')%5B0%5D.innerText%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20metadata%20=%20'%7B%22toledo_url%22:'%20+%20url%20+%20',%22toledo_title%22:'%20+%20title%20+%20'%7D';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20videos.push(metadata);%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20kaltura_channel%20=%20document.getElementsByTagName('iframe')%5B0%5D.src;%0A%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.open(kaltura_channel);%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D,%201000);%0A%20%20%20%20%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20//%20get%20all%20videos%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20toledo_content%20=%20document.getElementById('gallery').getElementsByTagName(%22li%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20=%200;%20i%20%3C%20toledo_content.length;%20i++)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(toledo_content%5Bi%5D.getElementsByTagName('img').length%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByTagName('img')%5B0%5D.src%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20title%20=%20'%22'%20+%20toledo_content%5Bi%5D.getElementsByClassName('thumb_name_content')%5B0%5D.innerText%20+%20'%22';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20metadata%20=%20'%7B%22toledo_url%22:'%20+%20url%20+%20',%22toledo_title%22:'%20+%20title%20+%20'%7D';%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20videos.push(metadata);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20var%20json%20=%20'%7B'%20+%20'%22videos%22:%20%5B'+%20videos.join(',').toString()%20+%20'%5D%7D';%0A%20%20%20%20console.log(json);%0A%20%20%20%20navigator.clipboard.writeText(json);null;%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20window.open('{{host}}');%0A%20%20%20%20%7D,%201000);%0A%7D%0AgetUrls();void(0);"><button>copy to download</button></a>