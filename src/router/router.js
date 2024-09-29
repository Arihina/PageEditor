import CommentPage from "@/components/CommentPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/comment/:id',
        component: CommentPage
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)

export default router;