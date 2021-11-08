import axios from "axios";
import { LinkModel } from "@/Models/LinkModel";

export default {
    async getLinks() {
        let result: LinkModel[] = [];
        await axios
            .get("https://6188a470d0821900178d740d.mockapi.io/api/links")
            .then((response) => (result = response.data));
        return result;
    },

    async getLink(id: number) {
        let result: LinkModel = {
            id: 0,
            parentId: 0,
            arabicName: '',
            englishName: '',
            url: '',
        };
        await axios
            .get("https://6188a470d0821900178d740d.mockapi.io/api/links/" + id)
            .then((response) => (result = response.data));
        return result;
    },

    async editLink(link: LinkModel) {
        let result;
        await axios
            .put("https://6188a470d0821900178d740d.mockapi.io/api/links/" + link.id, link)
            .then((response) => (result = response.status));
        return result;
    },

    async addLink(link: LinkModel) {
        let result;
        await axios
            .post("https://6188a470d0821900178d740d.mockapi.io/api/links/", link)
            .then((response) => (result = response.status));
        return result;
    },

    async deleteLink(id: number) {
        let result;
        await axios
            .delete("https://6188a470d0821900178d740d.mockapi.io/api/links/" + id)
            .then((response) => (result = response.status));
        console.log(result);
        return result;
    },

    async deleteAllLink(ids: number[]) {
        let result;
        ids.forEach(async function (value) {
            await axios
                .delete("https://6188a470d0821900178d740d.mockapi.io/api/links/" + value)
                .then((response) => (result = response.status));
        })
        console.log(result);
        return result;
    },
}