import { Arno } from "./core/Arno";

const valid = new Arno({
    username: Arno.string(),
    age: Arno.number(),
    email: Arno.email(),
    isActive: Arno.boolean(),
    tags: Arno.array(Arno.string()).optional(),
    profile: Arno.object({
        bio: Arno.string(),
        website: Arno.url(),
    }).optional(),
    joinDate: Arno.date(),
    status: Arno.enum('active', 'inactive', 'pending'),
});

const result = valid.validate({
    age: '30',
    email: 'invalid-email',
    isActive: true,
    profile: {
        bio: 'wow',
        website: 'http://itztiva.com',
    },
    joinDate: '2023-10-01',
    status: 'active',
});

if (result.isValid) {
    console.log('passed!');
} else {
    console.log('failed!', result.errors);
}
