# Base application

I used my version of the server

[https://bw-dad-jokes.herokuapp.com]

from [https://github.com/nmylynh/bw-dad-jokes-ex]

please change `${BASE_URL}` when ready to mount your own server.

## NOTES:

I created this as to help you guys have a foundation for added features. I hope this helps. I tried to format it as clearly as possible. I installed the necessary dependencies to clearly see where state is stored in the console and the steps taken. I hope this helps! SENDING LOTS OF LOOOOOOOVE AND EXHAUSTIONNNNN

*OPEN THE CONSOLE AND RUN YOUR FUNCTIONS TO DEBUG YOUR ADDED CODE AND WATCH STATE CHANGES*

P.S: Since I spent time on this work, I might not have time tomorrow to make a messaging app. I'm sorry!! But I made some instructions below. Four people can do this!! I BELIEVEEEEEEE

## THINGS LEFT TO DO:

### 1. Wallet & User Profile!

I didn't add it to this version because I know Preston structured his server differently. I also made changes to the jokes model to have an object property `created_by` to show the user's username by the foreign key id. Look in my  server repository to see how I did it!

The Wallet can be shown in a *user profile* because if you do a get request to a specific id, it returns the array of jokes created by the user. That's the joke wallet! Preston will structure this differently.

### 2. Search function 
We need a search function for the jokes. Here's a really good tutorial:
[https://medium.com/path2code/create-suggested-search-bar-with-react-select-f24fa3c5c3b]

It has auto complete and uses a package called react-select. Seems simple enough!

### 3. Ability to edit jokes
I wrote the logic in the actions. Just write a reducer for it and pull it from the store. You also have to render a button and possibly a modal form for it, whatever you like. 

### 4. Add a radio button or something to have state set the public state to true or false
Just let the user have an option to have the joke public or not!

### 5. STYLING

### 6. If you are up for it, a messaging function!

I haven't created an example structure yet, but the design I had in mind was:

        Table: messages      
    __________________________
    id: INTEGER++
    subject: TEXT
    body: TEXT
    sender: FOREIGN KEY (users)
    receiver: FOREIGN KEY (users)
    unread: BOOLEAN
    reciever_deleted: BOOLEAN
    sender_deleted: BOOLEAN

And in the model:

    function getReceivedMessages(id) {
        let loadMessages = db('messages')
            .where('messages.receiver', id)
            .join('users as receiver', 'messages.receiver', 'receiver.id')
            .join('users as sender', 'messages.sender', 'sender.id')
            .select('messages.id', 'messages.subject', 'messages.body' , 'sender.username as sender', 'receiver.username as receiver', 'messages.unread', 'messages.receiver_deleted', 'messages.sender_deleted'); 
        
        return loadMessages
    }

    function getSentMessages(id) {
        let loadMessages = db('messages')
            .where('messages.sender', id)
            .join('users as receiver', 'messages.receiver', 'receiver.id')
            .join('users as sender', 'messages.sender', 'sender.id')
            .select('messages.id', 'messages.subject', 'messages.body' , 'sender.username as sender', 'receiver.username as receiver', 'messages.unread', 'messages.receiver_deleted', 'messages.sender_deleted'); 

        return loadMessages
    }

Phew! The difficult part is done! Awesome! It _should_ work.

*Now implement it in a router and render it in a component!*

- Have a sent and received inbox!
- Render CSS depending on if its unread or not (grey if unread, oooh!)
- Make a delete button that filters out the list of messages:
 * depending on `messages.sender_deleted` or `messages.receiver_deleted`
 * It's a `PUT` request!
- A `POST` request to the messages table should have currentUser as the sender property! Check how I did it in this app.
- You can doooo it!


I've given you all the tools, NOW FLY, BE FREE, YOU WONDERFUL, BEAUTIFUL PEOPLE I LOVE YOU ALL

