class CreateVolunteers < ActiveRecord::Migration[6.0]
  def change
    create_table :volunteers do |t|
      t.string :name
      t.string :age
      t.string :contact
      t.string :skills

      t.timestamps
    end
  end
end
