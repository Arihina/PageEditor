import CommentPage from "@/components/CommentPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/comment/:id',
        name: 'comment-page',
        component: CommentPage,
        props: true
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)

export default router;