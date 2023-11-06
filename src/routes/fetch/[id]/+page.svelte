<script>
    export let data;
</script>


<div class="font-bold uppercase">{data.post ? data.post.title : ''}</div>
<div class="">{data.post ? data.post.body : ''}</div>
