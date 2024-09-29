export const Module = {
    state: () => ({
        comments: []
    }),
    getters: {
        getComments(state) {
            return state.comments;
        },
        getCommentById: (state) => (id) => {
            return state.comments.find(comment => comment.id === id);
        }
    },
    mutations: {
        addComment(state, comment) {
            state.comments.push(comment);
        },
    },
    actions: {
        addCommentToStore({ commit }, comment) {
            commit('addComment', comment);
        }
    },

    namespaced: true
}