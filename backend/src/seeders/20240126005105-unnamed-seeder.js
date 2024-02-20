'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Notes', [
      {
        id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        title: 'Note 1',
        description: 'This is note 1',
        image: 'https://picsum.photos/200',
        noteStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
        title: 'Note 2',
        description: 'This is note 2',
        image: 'https://picsum.photos/200',
        noteStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
        title: 'Note 3',
        description: 'This is note 3',
        image: 'https://picsum.photos/200',
        noteStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
        title: 'Note 3',
        description: 'This is note 3',
        image: 'https://picsum.photos/200',
        noteStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
        title: 'Note 3',
        description: 'This is note 3',
        image: 'https://picsum.photos/200',
        noteStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
        title: 'Note 3',
        description: 'This is note 3',
        image: 'https://picsum.photos/200',
        noteStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})

    await queryInterface.bulkInsert('Tags', [
      {
        id: 1,
        tagName: 'Tag 1',
        tagStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        tagName: 'Tag 2',
        tagStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        tagName: 'Tag 3',
        tagStatus: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})

    await queryInterface.bulkInsert('NoteTags', [
      {
        id: 1,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        TagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
        TagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
        TagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
        TagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
        TagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        TagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        NoteId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Notes', null, {})
    await queryInterface.bulkDelete('Tags', null, {})
    await queryInterface.bulkDelete('NoteTags', null, {})
  }
};
