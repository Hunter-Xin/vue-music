var app = new Vue({
    el:"#play",
    data () {
        return {
            query: "",
            musicList: [],
            musicUrl: "",
            musicCover: "",
            hotComments: [],
            isPlaying:false
        }
    },
    methods: {
        searchMusic() {
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
                .then( res => {
                    console.log(res)
                    this.musicList = res.data.result.songs
                })
                .catch( err => {
                    console.log(err)
                })
        },
        playMusic(id) {
            axios.get('https://autumnfish.cn/song/url?id='+id)
                .then( res => {
                    console.log(res)
                    this.musicUrl = res.data.data[0].url
                })
                .catch( err => {
                    console.log(err)
                })
            axios.get("https://autumnfish.cn/song/detail?ids=" + id)
                .then( res => {
                    console.log(res)
                    this.musicCover = res.data.songs[0].al.picUrl;
                })
                .catch( err => {
                    console.log(err)
                })
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + id)
                .then( res => {
                    console.log(res)
                    this.hotComments = res.data.hotComments
                })
                .catch( err => {
                    console.log(err)
                })
        },
        play() {
            this.isPlaying = true
        },
        pause() {
            this.isPlaying = false
        }
    }
})