import { Arnos } from "./core/Arnos";

const valid = new Arnos({
    username: Arnos.string(),
    age: Arnos.number(),
    email: Arnos.email(),
    isActive: Arnos.boolean(),
    tags: Arnos.array(Arnos.string()).optional(),
    profile: Arnos.object({
        bio: Arnos.string(),
        website: Arnos.url(),
    }).optional(),
    joinDate: Arnos.date(),
    status: Arnos.enum('active', 'inactive', 'pending'),
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
