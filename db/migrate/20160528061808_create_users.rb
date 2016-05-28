class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.timestamps null: false
    end

    create_table :agents do |t|
      t.belongs_to :user, index: true
      t.string :user_id
      t.string :firstname
      t.string :lastname
      t.datetime :birthdate
      t.string :address
      t.string :contactno
      t.timestamps null: false
    end
  end
end
