    import { createClient } from 'contentful';

    const articlePreview = (data) => ({
    id: data.sys.id,
    AutherName: data.fields.auther.fields.name,
    AutherType: data.fields.auther.fields.type,
    title: data.fields.title,
    summary: data.fields.summary,
    previewImage: 'https:'+data.fields.image.fields.file.url,
    });

    export const createContentClient = () => {
        return createClient({
        space: 'hhbojr5hx7ss',
        accessToken: 'wQnL7sgsRG-s0Uwuv3iIhw6BDX5eJN3fvo0ma0HmkPg',
        })
    }
    
    const client = createContentClient()
    
    export const getEntriesByType = async (type) => {
        const response = await client.getEntries({
        content_type: type,
        });
    
        const items = Array.isArray(response.items) ? response.items : [];
        const articles = items.map((item) => articlePreview(item));
        return articles;
    };