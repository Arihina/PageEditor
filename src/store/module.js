export const Module = {
    state: () => ({
        comments: new Map()
    }),
    getters: {
        getComments(state) {
            return state.comments;
        },
        getCommentById: (state) => (id) => {
            return Array.from(state.comments.values()).find(comment => comment.id === id);
        },
        getCommentByQuote: (state) => (quote) => {
            return state.comments.get(quote);
        }
    },
    mutations: {
        addComment(state, { comment, quote }) {
            state.comments.set(quote, comment);
        },
        removeComment(state, quote) {
            state.comments.delete(quote);
        }
    },
    actions: {
        addCommentToStore({ commit }, { comment, quote }) {
            commit('addComment', { comment, quote });
        },
        removeCommentFromStore({ commit }, quote) {
            commit('removeComment', quote);
        }
    },
    namespaced: true
}
