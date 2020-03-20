// 通过mutation间接更新state多个方法对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'
import { reqAddress, reqCategorys, reqShops } from '../api';
export default {
    getAddress({ commit, state }) {
        return new Promise(async (resolve, reject) => {
            const geohash = state.latitude + ',' + state.longitude;
            const result = await reqAddress(geohash);
            if (result.code === 0) {
                const address = result.data;
                commit(RECEIVE_ADDRESS, { address });
                console.log('1111111111111111');
                resolve();
            } else {
                reject(result);
            }
        });
    },
    async getCategorys({ commit }) {
        const result = await reqCategorys();
        if (result.code === 0) {
            const categorys = result.data;
            commit(RECEIVE_CATEGORYS, { categorys })
        }
    },
    async getShops({ commit, state }) {
        const { latitude, longitude } = state;
        const result = await reqShops(longitude, latitude);
        if (result.code === 0) {
            const shops = result.data;
            commit(RECEIVE_SHOPS, { shops })
        }
    }
}