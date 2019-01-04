<template lang="html">
<div>
    <h1>몽고DB Rest API TEST(POSTS)</h1>
    <hr/>
    <div>
        <button type="button"  v-b-modal="'addPostModal'" class="btn btn-secondary">add</button>
        <hr/>
        <ul v-for="post in posts" class="list-group post">
            <li class="list-group-item">
                <span class="badge badge-primary badge-pill">more</span>
                <span><strong>title</strong> : {{post.title}}</span> <br/>
                <span><strong>contents</strong> : {{post.contents}}</span>
            </li>
        </ul>
    </div>

    <!-- the modal -->
    <b-modal id="addPostModal" ref="addPostModal" hide-footer title="Add Post">
        <div class="modal-body">
            <slot name="body">
                <b-form>
                    <b-form-group id="post_title_group" label="Title." label-for="title" description="">
                        <b-form-input id="title" type="text" v-model="addPost.title" required placeholder="Enter title"></b-form-input>
                    </b-form-group>
                    <b-form-group id="post_content_group" label="Contents." label-for="content">
                        <b-form-input id="content" type="text" v-model="addPost.contents" required placeholder="Enter Contents"></b-form-input>
                    </b-form-group>
                </b-form>  
            </slot>
        </div>
         <div class="modal-footer">
            <slot name="footer">
                <button type="button" class="btn btn-primary"@click="insertPost">등록</button>
                <button type="button" class="btn btn-danger" @click="hideModal">취소</button>
            </slot>
          </div>
    </b-modal>
    <!--end -->
    <b-alert  ref="alertMsg" :variant="alert.variant" dismissible fade :show="alert.isVisible" @dismissed="alert.isVisible=false">
      {{alert.msg}}
    </b-alert>
</div>
</template>


<script>
export default {
  created () {
    this.getPosts();
  },
  data () {
    return {
      posts: [],
      addPost : {
          title : '',
          contents : ''
      },
      alert :{
          isVisible:false,
          variant : '',
          msg:''
      }
    }
  },
  methods: {
    
    getPosts (){
        this.$http.get('/api/posts')
            .then((response) => {
            //console.log(response.data);
            this.posts = response.data
        })
    },
    insertPost (evt) {
        
        this.$http({
            method: 'post',
            url: '/api/posts/add',
            data: this.addPost
        })
        .then((response) => {
            //console.log(response.data);

            this.addPost = {
                title : '',
                contents : ''
            }
            console.log('alert',this.$refs.alertMsg);

            if(response.data != undefined && response.data.code == 200){
                this.alert.msg = response.data.msg;
                this.getPosts();
                this.alert.variant = 'success';
            }
            else {
                this.alert.msg = response.data.msg;
                this.alert.variant = 'danger';
            }
            this.hideModal();
            this.alert.isVisible = true;
        })
    },
    hideModal () {
        
        this.$refs.addPostModal.hide()
    }
  }
}
</script>

<style lang="css">
</style>