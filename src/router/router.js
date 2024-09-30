import CommentPage from "@/components/CommentPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/comments/:id',
        name: 'comments',
        component: CommentPage,
        props: (route) => ({ comment: this.$store.getters['comments/getCommentById'](route.params.id) })
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)

export default router;