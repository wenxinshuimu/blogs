export const state = () => ({
	navName: " "
})

export const mutations = {
	setNavName (state, val) {
		state.navName = val;
	}
}

export const actions = {
	setNavName ({commit}, navName) {
		commit('setNavName', navName)
	}
}